"use client";

import React, { useState, useEffect } from 'react';
import styles from './List.module.css';
import { addcard, removeEntity } from '@/redux/features/auth-slice';
import { useDispatch, useSelector } from 'react-redux';
import { cardgsap, DeleteCardgsap } from '@/gsap/gsap';

import Ima from '../../../public/cross.png'
import Image from 'next/image';

function List() {
    const stateCards = useSelector((state) => state.cardsReducer);
    const [text, setText] = useState('');
    const [cardid, setCardid] = useState(1);
    const [newCardAdded, setNewCardAdded] = useState(false);

    const [textLength, setTextLength] = useState(false)


    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    const dispatch = useDispatch();

    const addCardfunction = () => {
       if(text.length > 5 ) {
         
        const newCardId = cardid + 1;
        setCardid(newCardId);

        const newCard = { cardid: newCardId, text, date: formattedDate, stat: "working on it" };
        dispatch(addcard(newCard));
        setNewCardAdded(true); // Trigger animation flag
        setText(''); // Clear input field
        setTextLength(false)
       }
       else{
        setTextLength(true)
       }
    };

    useEffect(() => {
        if (newCardAdded) {
            const latestCardId = cardid;
            const latestCardElement = document.querySelector(`[data-cardid='${latestCardId}']`);
            if (latestCardElement) {
                cardgsap(latestCardElement); // Call GSAP animation
            }
            setNewCardAdded(false); // Reset the animation flag
        }
    }, [newCardAdded]);

    const handleDeleteEntity = (id) => () => {
        const cardElement = document.querySelector(`[data-cardid='${id}']`);
        if (cardElement) {
            DeleteCardgsap(cardElement);
            // After animation is complete, you can dispatch the removal action
            setTimeout(() => {
                dispatch(removeEntity(id));
            }, 1500); // 1 second delay before dispatching removeEntity
        }
    };

    return (
        <div className={styles.container}  id='text-con' >
            
            {textLength && (
                <div className={styles.errorText}>You must add at least 5 letters</div>
            )}

            <div className={styles.addCon}>
                <div className={styles.add}>
                    <input
                        type="text"
                        className={styles.addInput}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />

                </div>
                <div className={styles.btnadd} onClick={addCardfunction}>
                    <Image className={styles.btnImage} width={40} height={40} src={Ima} />
                </div>
            </div>

            <div className={styles.cardsCon}>
            <div className={styles.cards}>
                {stateCards.map((item) => (
                    <div
                        key={item.cardid}
                        data-cardid={item.cardid}
                        className={styles.card}
                    >
                        <div className={styles.text}>{item.text}</div>
                        <div className={styles.actions}>
                            <div className={styles.btns}>
                                <div className={styles.delete} onClick={handleDeleteEntity(item.cardid)}>
                                    delete
                                </div>
                            </div>
                            <div className={styles.statues}>
                                <div className={styles.date}>{item?.date}</div>
                                {/* <div className={styles.statue}>{item?.stat}</div> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            
        </div>
    );
}

export default List;
