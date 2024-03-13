import {bindActionCreators} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import {authAction} from '@/base/store';

const useAuthActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(authAction, dispatch);
};

export {useAuthActions};
