import React, { Children, useState } from 'react';

import { usePrevious } from '../../utils';

import './dropdown.styles.css'

const DropDown = ({ children, show, toggleOnHover, snap, widthPercentage, adjustY, closeOnClick, disableToggle, handleContentRect, translateContent }) => {
    const [toggle, setToggle] = useState(false);
    const [triggerRect, setTriggerRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
    const [contentRect, setContentRect] = useState({ width: 0 });

    const prevRect = usePrevious(triggerRect);
    const prevContentRect = usePrevious(contentRect);

    const triggerCallback = el => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (!prevRect || rect.height !== prevRect.height || rect.y !== prevRect.y) {
            setTriggerRect(rect);
        }
    }

    const contentCallback = el => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (!prevContentRect || rect.width !== prevContentRect.width) {
            setContentRect(rect);
            if (handleContentRect) handleContentRect(rect);
        }
    }

    const { height, width } = triggerRect;
    const contentWidth = contentRect.width;

    adjustY = adjustY || 0;

    let style;
    const bottomRight = {
        width: widthPercentage ? `${width * widthPercentage}px` : null,
        top: `${height + 2 + adjustY}px`, 
        right: '0px'
    }
    switch(snap) {
        case 'bottom-right':
            style = bottomRight;
            break;
        case 'bottom-left':
            style = {
                width: widthPercentage ? `${width * widthPercentage}px` : null,
                top: `${height + 2 + adjustY}px`, 
                left: `0px`
            }
            break;
        case 'bottom-middle':
            style = {
                top: `${height + 2 + adjustY}px`, 
                left: `${(width / 2) - (contentWidth / 2)}px` 
            }
            break;
        default:
            style = bottomRight;
    }

    return ( 
        <div className='relative'>
            <div 
                ref={triggerCallback} 
                onClick={() => {
                    if (toggleOnHover) return;
                    if (show === false) return;
                    if (disableToggle) return;
                    setToggle(!toggle)
                }}
                onMouseEnter={() => {
                    console.log('here')
                    if (!toggleOnHover) return;
                    if (show === false) return;
                    if (disableToggle) return;
                    setToggle(!toggle)
                }}
            >
                {Children.map(children, (child, i) => {
                    if (i === 0) return child;
                })}
            </div>
            {
                (toggle || show) && !disableToggle &&
                <div 
                    className='fixed inset-0' 
                    onClick={() => {
                        if (disableToggle) return;
                        setToggle(false)
                    }}
                ></div>
            }
            <div 
                className='content'
                ref={contentCallback}
                style={{
                    ...style,
                    opacity: (toggle || show) ? 1 : 0,
                    pointerEvents: (toggle || show) ? 'auto' : 'none',
                    transform: translateContent || null
                }}
                onClick={() => {
                    if (!closeOnClick) return;
                    if (disableToggle) return;
                    setToggle(false);
                }}
            >
                {Children.map(children, (child, i) => {
                    if (i === 1) return child;
                })}
            </div>
        </div>
     );
}
 
export default DropDown;