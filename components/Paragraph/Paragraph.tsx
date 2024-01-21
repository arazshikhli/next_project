import { ParagraphProps } from "./Paragraph.props";
import styles from './Paragraph.module.css'
import cn from 'classnames'
export const Paragraph=({children,size='m',className,...props}:ParagraphProps):JSX.Element=>{
    // switch(size){
    //     case 's':return <p className={styles.s}>{children}</p>
    //     case 'm':return <p className={styles.m}>{children}</p>
    //     case 'l':return <p className={styles.l}>{children}</p>
    // }
    return <p
    className={cn(styles.p,className,{
        [styles.s]:size=='s',
        [styles.m]:size=='m',
        [styles.l]:size=='l',
    })}
    {...props}
    >
        {children}
    </p>
}