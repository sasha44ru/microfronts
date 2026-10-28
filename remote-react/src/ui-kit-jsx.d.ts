import type { DetailedHTMLProps, HTMLAttributes } from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ui-button': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
                variant?: 'primary' | 'ghost' | 'danger';
                disabled?: boolean;
            };
            'ui-card': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
                heading?: string;
            };
            'ui-badge': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
                tone?: 'neutral' | 'success' | 'warning' | 'danger';
            };
            'ui-input': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
                label?: string;
                placeholder?: string;
                type?: string;
                value?: string;
                error?: string;
            };
            'ui-modal': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
                title?: string;
                open?: boolean;
            };
        }
    }
}