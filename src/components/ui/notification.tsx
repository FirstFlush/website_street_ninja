import { CheckCircle, AlertTriangle, Info, XCircle, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface NotificationProps {
    title: string;
    message?: string;
    variant?: "success" | "danger" | "warning" | "info" | "default";
    icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}

const variantConfig = {
    success: { icon: CheckCircle, bg: "bg-green-100", text: "text-green-700", border: "border-green-300" },
    danger: { icon: XCircle, bg: "bg-red-100", text: "text-red-700", border: "border-red-300" },
    warning: { icon: AlertTriangle, bg: "bg-yellow-100", text: "text-yellow-700", border: "border-yellow-300" },
    info: { icon: Info, bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-300" },
    default: { icon: Info, bg: "bg-gray-100", text: "text-gray-700", border: "border-gray-300" },
};

const Notification = ({ title, message, variant = "default", icon }: NotificationProps) => {
    const config = variantConfig[variant];
    const IconComponent = icon || config.icon;

    return (
        <div className={`flex flex-col p-4 rounded-lg shadow-md border ${config.bg} ${config.text} ${config.border}`}>
            <div className="flex items-center">
                <IconComponent size={24} className={`mr-3 ${config.text}`} />
                <h2 className="text-lg font-semibold">{title}</h2>
            </div>
            {message && <p className="mt-2 text-sm">{message}</p>}
        </div>
    );
};

export default Notification;
