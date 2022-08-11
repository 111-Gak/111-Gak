import axios from "axios";

export default function CheckBox(props){
    const {chks, postId, id, setLoaded}=props;
    
    const handleCheckboxChange = async (ev, postId)=> {
        const name = ev.target.name;
        const toggleDone = ev.target.checked? 1 : 0 ;
        
        const newValue = {[ev.target.name]: toggleDone} 
        const patchValue = {...chks, ...newValue}

        await axios.patch(`https://sheltered-ocean-99610.herokuapp.com/checklist/${id}`, patchValue, {
            headers: { 
                'Content-Type': 'application/json' 
            }
        })
        setLoaded(false)
    }

    return (
    <>
        <div>
            <input 
                type="checkbox" 
                name={'chk1'}
                id={'chk1'}
                checked={chks.chk1 ? 'checked' : false}
                onChange={(ev)=> {
                    ev.preventDefault();
                    handleCheckboxChange(ev, postId);
                }}
                />
            <label htmlFor={'chk1'} >
                {chks.chk1Text}
            </label>
        </div>

        {chks.chk2Text && <div>
            <input 
                type="checkbox" 
                name={'chk2'}
                id={'chk2'}
                checked={chks.chk2 ? 'checked' : false}
                onChange={(ev)=> {
                    ev.preventDefault();
                    handleCheckboxChange(ev, postId);
                }}
                />
            <label htmlFor={'chk2'} >
                {chks.chk2Text}
            </label>
        </div>
        }

        {chks.chk3Text && <div>
            <input 
                type="checkbox" 
                name={'chk3'}
                id={'chk3'}
                checked={chks.chk3 ? 'checked' : false}
                onChange={(ev)=> {
                    ev.preventDefault();
                    handleCheckboxChange(ev, postId);
                }}
                />
            <label htmlFor={'chk3'} >
                {chks.chk3Text}
            </label>
        </div>
        }

    </>
    )
}