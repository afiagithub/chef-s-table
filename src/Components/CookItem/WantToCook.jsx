import PropTypes from 'prop-types';
const WantToCook = ({cookItems}) => {
    return (
        <div className="w-[514px] mt-3 border-2 border-[#28282833] rounded-2xl">
            <h1 className="text-2xl font-semibold pt-8 pb-10 text-center">Want to cook: {cookItems.length}</h1>
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
                            cookItems.map((cookItem, idx) => 
                            <tr key={idx} className='font-fira text-[#878787] bg-[#28282808]'>
                                <th>{idx + 1}</th>
                                <td>{cookItem.name}</td>
                                <td>{cookItem.preparing_time}</td>
                                <td>{cookItem.calories}</td> 
                                <td><button className='btn bg-[#0BE58A] rounded-full'>Preparing</button></td>                               
                            </tr>                            
                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

WantToCook.propTypes = {
    cookItems: PropTypes.array
}

export default WantToCook;