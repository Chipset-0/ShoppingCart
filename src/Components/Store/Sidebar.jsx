import { useEffect, useState } from "react";
import './Sidebar.css'

export default function Sidebar({filters, setFilters})
{

    const toggleFilter = (filter) => {
        if (filters.includes(filter))
        {
            setFilters(filters.filter(f => f !== filter))
        }
        else
        {
            setFilters([...filters, filter])
        }
    }

    return (
        <div className="sidebar-container">
            <form className="vertical-form">
                <div>
                    <input type="checkbox" id="ball-check" name="ball-check" value="balls" onChange={() => {toggleFilter("ball")}}/>
                    <label htmlFor="ball-check">Poke Balls</label>
                </div>

                <div>
                    <input type="checkbox" id="potion-check" name="potion-check" value="potion" onChange={() => {toggleFilter("potion")}}/>
                    <label htmlFor="potion-check">Potions</label>
                </div>

                <div>
                    <input type="checkbox" id="status-check" name="ball-check" value="status" onChange={() => {toggleFilter("status")}}/>
                    <label htmlFor="status-check">Status</label>
                </div>

                <div>
                    <input type="checkbox" id="item-check" name="item-check" value="item" onChange={() => {toggleFilter("ball")}}/>
                    <label htmlFor="item-check">Items</label>
                </div>
            </form>
        </div>
    )
}