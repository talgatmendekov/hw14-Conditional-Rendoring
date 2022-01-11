import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'

function Expenses(props){
    return (
        <Card className = 'expenses'>
            {props.arrData.map((el, id)=>{
                return (
                    <ExpenseItem
                        key = {el.id}
                        title = {el.title}
                        date = {el.date}
                        amount = {el.amount}
                    />

                )

            })}
        </Card>

    )

    // return(
    //     <div>
    //         <ExpenseItem 
    //          title = {renderData[0].title} 
    //          amount={renderData[0].amount} 
    //          date={renderData[0].date}
    //         />
    //         <ExpenseItem 
    //          title = {renderData[1].title} 
    //          amount={renderData[1].amount} 
    //          date={renderData[1].date}
    //         />
    //         <ExpenseItem 
    //          title = {renderData[2].title} 
    //          amount={renderData[2].amount} 
    //          date={renderData[2].date}
    //         />
    //         <ExpenseItem 
    //          title = {renderData[3].title} 
    //          amount={renderData[3].amount} 
    //          date={renderData[3].date}
    //         />
    //     </div>
    // )
}

export default Expenses