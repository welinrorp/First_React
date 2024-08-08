
import styles from './TextInput.module.css';
//import React from 'react';
//import PropTypes from 'prop-types';

export default function TextInput(props){
    
   
   
    return (
        <div>
           
            <textarea 
            className={styles.input} 
            {...props} 
            />
           
        </div>
    );

}