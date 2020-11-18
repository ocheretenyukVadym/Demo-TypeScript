import { useObserver } from 'mobx-react';
import React from 'react';
import Select from 'react-select'
import { AssignToUserSelectType } from '../../../../Common/types';
import { useRootStore } from '../../../Store/RootStateContext';

type OptionsType = {
    value: number,
    label: string
}
const AssignToUserSelect: React.FC<AssignToUserSelectType> = ({ ticketId }) => {
    const { nodesStore } = useRootStore();
    const options: Array<OptionsType> = [];

    const assignToUser = (id: number) => !!id && nodesStore.assignToUser(id, ticketId);

    (function setOptions() {
        nodesStore.users.map(user => {
            options.push({
                value: user.id,
                label: user.name
            })
        })
    })()

    return useObserver(() => (
        <div className="assign-user-container" style={{display: 'flex'}}>
            <Select isLoading={!nodesStore.isFetching} options={options} 
            onChange={ (user: any) => assignToUser(user.value)} styles={customStyles} />
        </div>
    ))
}

export default AssignToUserSelect;

const customStyles = {
    menu: (provided: any, state: any) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.selectProps.menuColor,
      padding: 20,
    }),

    loadingIndicator: () => ({
        display:'flex',
        alignItems: 'center',
        width: '50%',
        height: '44%',
        span: {
            height: '50%',
        }
    }),
  
    control: (_: any, { selectProps: {  }}) => ({
      display: 'flex',
      border: '1px solid #dbdbdb',
    }),
  
    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition };
    }
  }