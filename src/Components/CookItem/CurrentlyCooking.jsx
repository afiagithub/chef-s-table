import PropTypes from 'prop-types';

const CurrentlyCooking = ({cookingItems}) => {
    let prepTime = 0;
    let totCal = 0;
    cookingItems.forEach(cookingItem => prepTime += cookingItem.preparing_time);
    cookingItems.forEach(cookingItem => totCal += parseInt(cookingItem.calories)); 
    return (
        <div className="table-section">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            cookingItems.map((cookingItems, idx) => 
                            <tr key={idx} className='font-fira text-[#878787] bg-[#28282808]'>
                                <th>{idx + 1}</th>
                                <td>{cookingItems.name}</td>
                                <td>{cookingItems.preparing_time} minutes</td>
                                <td>{cookingItems.calories} calories</td>                             
                            </tr>                            
                            )                            
                        }
                        <tr>
                            <th></th>
                            <td></td>
                            <td className='font-semibold'>Total Time = {prepTime} minutes
                            </td>
                            <td className='font-semibold'>Total Calories = {totCal} calories</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

CurrentlyCooking.propTypes = {
    cookingItems: PropTypes.array
}

export default CurrentlyCooking;