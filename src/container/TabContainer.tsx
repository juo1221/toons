import React from 'react';
import TabView from '../view/TabView';
import { useStores } from 'context/RootContext';
import { observer } from 'mobx-react-lite';
const TabContainer = observer(() => {
  const { platFormStore } = useStores();
  const onSetPlatForm = (newPlatForm: string) => {
    platFormStore.setPlatForm(newPlatForm);
  };
  return <TabView onSetPlatForm={onSetPlatForm} platform={platFormStore.platForm.res} />;
});

export default TabContainer;
