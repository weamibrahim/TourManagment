
import { motion } from 'framer-motion';


const PageTransition = (OriginalComponent) => {
       const WrappedComponent = () => (
        <>
           
            <OriginalComponent />
           
            <motion.div
                className='slide-in'
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
            <motion.div
                className='slide-out'
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
        </>
    );

    return WrappedComponent;
};

export default PageTransition;
