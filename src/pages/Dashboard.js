import { React, useState, useEffect } from 'react'
import { Card } from '../components/Card'
import { Pagination } from '../components/Pagination'
import { Adminpanel } from '../layouts/Adminpanel'

export const Dashboard = () => {

    const [batteryLevel, setBatterLevel] = useState('')

    const batteryInfo = () => {
        navigator.getBattery().then(function(battery) {
            setBatterLevel(battery.level * 100)
        });
    }

    useEffect(() => {
        batteryInfo()
    }, [])
      
    return (
        <Adminpanel>
            <h2 className="mb-6 text-2xl font-semibold text-gray-700">Dashboard</h2>
            

            {/* <!-- Cards --> */}
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                <Card color='orange' title='Total clients' value='4248' />
                <Card color='green' title='Accounts balance' value='$ 46,760.89' />
                <Card color='blue' title='New sales' value='376' />
                <Card color='teal' title='Pending contact' value='28' />
            </div>

            {/* <div className="battery">
                <div className="battery-level" style={{width: `${batteryLevel}%`}}></div>
                <div className="battery-cap"></div>
                <div className='battery-label'>{batteryLevel}%</div>
            </div> */}

           
        </Adminpanel>
    )
}
