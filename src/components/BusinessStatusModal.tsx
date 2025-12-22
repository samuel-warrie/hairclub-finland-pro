import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { getBusinessStatus, BusinessHoursInfo } from '@/lib/businessHours';
import { Clock, CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

export const BusinessStatusModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<BusinessHoursInfo | null>(null);

  useEffect(() => {
    const updateStatus = () => {
      const currentStatus = getBusinessStatus();
      setStatus(currentStatus);
    };

    updateStatus();
    setIsOpen(true);

    const interval = setInterval(updateStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!status) return null;

  const getStatusColor = () => {
    switch (status.status) {
      case 'open':
        return 'text-green-600';
      case 'closing-soon':
        return 'text-amber-600';
      case 'closed':
        return 'text-red-600';
    }
  };

  const getStatusIcon = () => {
    switch (status.status) {
      case 'open':
        return <CheckCircle2 className="w-12 h-12 text-green-600" />;
      case 'closing-soon':
        return <AlertCircle className="w-12 h-12 text-amber-600" />;
      case 'closed':
        return <XCircle className="w-12 h-12 text-red-600" />;
    }
  };

  const getStatusTitle = () => {
    switch (status.status) {
      case 'open':
        return 'We\'re Open!';
      case 'closing-soon':
        return 'Closing Soon';
      case 'closed':
        return status.isHolidayClosure ? 'Holiday Closure' : 'We\'re Closed';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="sr-only">Business Hours Status</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center text-center space-y-6 py-6">
          <div className="flex items-center justify-center">
            {getStatusIcon()}
          </div>

          <div className="space-y-2">
            <h2 className={`text-3xl font-bold ${getStatusColor()}`}>
              {getStatusTitle()}
            </h2>
            <p className="text-lg text-muted-foreground">
              {status.message}
            </p>
          </div>

          {status.isHolidayClosure && (
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 w-full">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                Happy Holidays! We're taking a break from December 24th to January 1st.
              </p>
            </div>
          )}

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Regular Hours: Mon-Fri 9AM-6PM, Sat 9AM-5PM</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
