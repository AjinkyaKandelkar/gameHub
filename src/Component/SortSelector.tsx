import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
  } from "../components/ui/menu";
  import { Button } from "@chakra-ui/react";

  
  interface props {
    getSelectedSortOrder:(sortOrder: string)=>void;
    selectedSortOrder: string;
  }
  
  const SortSlector = ({getSelectedSortOrder, selectedSortOrder}:props) => {
    
    const sortOrders=[
        {value: '', label:'Relevance'},
        {value: '-added', label:'Date added'},
        {value: 'name', label:'Name'},
        {value: '-released', label:'Released Date'},
        {value: '-metacritic', label:'Popularity'},
        {value: '-rating', label:'Average Rating'},
        ];
        const CurrentSortOrder= sortOrders.find( order=> order.value === selectedSortOrder )
    return (
      <>
        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant={"subtle"} size={"sm"}>
              Order By : {CurrentSortOrder?.label || 'Relevence'}
            </Button>
          </MenuTrigger>
          <MenuContent>
            {sortOrders.map((order) => (
              <MenuItem
                onClick={() => getSelectedSortOrder(order.value)}
                key={order.value}
                value={order.value}
              >
                
                {order.label}
              </MenuItem>
            ))}
          </MenuContent>
        </MenuRoot>
      </>
    );
  };
  export default SortSlector;
  