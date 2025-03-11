import clsx from "clsx";

interface SectionHeaderProps {
    title: string;
    align?: "left" | "center"
    subtitle?: string;
    isDark?: boolean;
}

const SectionHeader = ({ title, subtitle, align="center", isDark = false }: SectionHeaderProps) => {

    return (
        // <FadeIn>
            <div className={clsx(
                "max-w-2xl md:mx-auto  xl:max-w-none",
                `text-${align}`,
                isDark ? "text-white" : "text-foreground", 
            )}>
                <h2 className="font-display font-light text-3xl tracking-tighttext-white sm:text-4xl md:text-5xl">
                    {title}
                </h2>
                {subtitle &&
                <p className={clsx(
                    "mt-6 text-lg tracking-tight",
                    isDark ? "text-gray-300" : "text-subheader"
                )}>
                    {subtitle}
                </p>
                }
            </div>
        // </FadeIn>
    )
}

export default SectionHeader;


