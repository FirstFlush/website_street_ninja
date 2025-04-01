import clsx from "clsx";

interface ContentIconProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    className?: string
}

const ContentIcon = ({ icon: Icon, className }: ContentIconProps) => {


    return (
        <div
            className={clsx(
                'inline-flex items-center justify-center w-10 h-10 rounded-lg',
                'text-white bg-primary-dark-10',
                className,
            )}
        >
            <Icon />
        </div>
    )
}

export default ContentIcon;