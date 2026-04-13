import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      let errorMessage = "An unexpected error occurred.";
      let isFirestoreError = false;

      try {
        if (this.state.error?.message) {
          const parsed = JSON.parse(this.state.error.message);
          if (parsed.error && parsed.authInfo) {
            errorMessage = `Firestore Permission Error: ${parsed.error}`;
            isFirestoreError = true;
          }
        }
      } catch (e) {
        errorMessage = this.state.error?.message || errorMessage;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
          <Card className="max-w-md w-full border-2 border-rose-200 shadow-xl">
            <CardHeader className="bg-rose-50 text-rose-900">
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-6 h-6 mr-2" />
                Oops! Something went wrong
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <p className="text-slate-600 leading-relaxed">
                {errorMessage}
              </p>
              {isFirestoreError && (
                <div className="bg-slate-100 p-4 rounded-lg text-xs font-mono text-slate-500 overflow-auto max-h-32">
                  {this.state.error?.message}
                </div>
              )}
              <Button 
                onClick={() => window.location.reload()} 
                className="w-full bg-rose-600 hover:bg-rose-700 h-12"
              >
                <RefreshCcw className="w-4 h-4 mr-2" />
                Reload Application
              </Button>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}
