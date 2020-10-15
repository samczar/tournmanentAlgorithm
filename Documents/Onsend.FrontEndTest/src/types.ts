// Store root state

export interface RootState {
  data?: RootState;
  id: number;
  sender: {
    name: string;
    address: string;
  };
  receiver: {
    name: string;
    address: string;
  };
}
