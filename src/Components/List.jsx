import React from "react";

import { useState } from "react";

import "./List.css"

export function List(){

    const [items, setItems] = useState(13)

    const handleItems = (value) => {
        setItems(value+items);
    };

    const [pens, setPens] = useState(10)

    const handlePens = (value) => {
        setPens(value+pens);
    };

    const [notes, setNotes] = useState(44)

    const handleNotes = (value) => {
        setNotes(value+notes);
    };

    const [inks, setInks] = useState(78)

    const handleInks = (value) => {
        setInks(value+inks);
    };
   

    
    return(
        <>
        <div className="items">
            <h1 className="head">List of all items</h1>
            <hr />
            <div className="ali">
           
            <span> <h2> BOOKS : {items}</h2></span>
            <button className="addBook"
            onClick={() => handleItems(1)}
            >ADD</button>
            <button className="remBook"
            onClick={() => handleItems(-1)}
            >SUB</button>
            <span className="totalBooks"> totalBooks: {items}</span>
            
            <hr />
            </div>


            <div className="ali">
           
           <span> <h2> PENS : {pens}</h2></span>
           <button
           className="addPen"
           onClick={() => handlePens(1)}
           >ADD</button>
           <button
           className="remPen"
           onClick={() => handlePens(-1)}
           >SUB</button>
           <span className="totalPens">totalPens: {pens}</span>
           
           <hr />
           </div>

           <div className="ali">
           
           <span> <h2> NOTE BOOKS : {notes}</h2></span>
           <button
           className="addNotebook"
           onClick={() => handleNotes(1)}
           >ADD</button>
           <button
           className="remNotebook"
           onClick={() => handleNotes(-1)}
           >SUB</button>
           <span className="totalNotebooks"> totalNotebooks: {notes}</span>
           
           <hr />
           </div>

           <div className="ali">
           
           <span> <h2> INK PENS : {inks}</h2></span>
           <button
           className="addInkpen"
           onClick={() => handleInks(1)}
           >ADD</button>
           <button
           className="remInkpen"
           onClick={() => handleInks(-1)}
           >SUB</button>
           <span className="totalInkpens">totalInkpens: {inks}</span>
           
           <hr />
           </div>

           <h1>TOTAL OF ALL ITEMS:</h1>
           <h2 className="total">{inks+pens+items+notes}</h2>

        </div>
        </>
    )
}