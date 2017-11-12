export const ACTION_ONE = 'ACTION_ONE';
export const ACTION_TWO = 'ACTION_TWO';
export const ACTION_THREE = 'ACTION_THREE';

export const actionOne = (value) => {
	return { type: ACTION_ONE };
};

export const actionTwo = () => {
	return { type: ACTION_TWO };
};

export const actionThree = () => {
	return { type: ACTION_THREE };
};