import clsx from "clsx";

interface PageWrapperProps extends React.ComponentPropsWithoutRef<'div'> {
    bgImage?: string;
    noMargin?: boolean;
  }
  
const PageWrapper = ({ children, bgImage, noMargin, ...props }: PageWrapperProps) => {
    return (
        <div
            className={clsx(
                `${noMargin ? '' : 'mt-[72px]'}`, 
                `${bgImage ? 'bg-cover bg-center' : ''}`,
            )}
            style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
            {...props}
        >
            {children}
        </div>
    );
};
  
export default PageWrapper;
  