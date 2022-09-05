import clsx from "clsx";

enum TypographyVariant {
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6'
}

interface TypographyProps {
    variant?: keyof typeof TypographyVariant;
    children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({variant, children}) => {
    return (
        <div>
            <h1 className={clsx('underline mt-4',
            {'text-[78px] bg-red-500' : variant === 'h1'},
            {'text-[62px] bg-blue-300' : variant === 'h2'},
            {'text-[48px] bg-yellow-300' : variant === 'h3'},
            {'text-[32px] bg-green-300' : variant === 'h4'},
            {'text-[24px] bg-purple-300' : variant === 'h5'},
            {'text-[16px] bg-orange-300' : variant === 'h6'},
            )}>{children}</h1>
        </div>
    )
}

export default Typography;