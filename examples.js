// ? Action with api call, 
export const xyz = (params) => async (dispatch) => {
  const { yo, uid } = window.xyzz;
  const url = `${apiRoot}/api/v1/${encodeURIComponent(yo)}/xyz`;
  try {
    const options = {
      method: 'PUT',
      data: {
        source: uid,
        accountId: getAccountId(),
        ...params,
      },
    };
    dispatch(changeLoadingStatus({ comp: LC.SERVICECREDADD, loading: true }));
    const slcredentials = await enhancedFetch(url, options);
    dispatch(serviceCredCreated(slcredentials));
    dispatch(changeLoadingStatus({ comp: LC.SERVICECREDADD, loading: false }));
    return slcredentials;
  } catch (error) {
    dispatch(changeLoadingStatus({ comp: LC.SERVICECREDADD, loading: false }));
    dispatch(errorHandle(error));
  }
};

// ? example of functional test with cucumber
import {
  When, Then
} from '@cucumber/cucumber';
When(/^I click the Getting started item in left nav$/, async () => {
  await gettingStartedPage.clickGettingStartedNav();
});

Then(/^the Setting up Pane should be shown$/, async () => {
  await checkUtil.isVisible(selectors.settingPane);
});


//? imports for unit tests

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';