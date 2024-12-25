import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
  } from "../components/ui/menu";
  import { Button } from "@chakra-ui/react";

  
  interface props {
    getSelectedSortOrder:(sortOrder: string)=>void;
    selectedSortOrder: string | null
  }
  
  const SortSlector = ({getSelectedSortOrder, selectedSortOrder}:props) => {
    
    const sortOrders=[
        {value: '', label:'Relevence'},
        {value: '-added', label:'Date Added'},
        {value: 'name', label:'Name'},
        {value: '-released', label:'Released Date'},
        {value: '-metacritic', label:'Popularity'},
        {value: '-rating', label:'Average Rating'},
        ]
  
    return (
      <>
        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant={"subtle"} size={"sm"}>
              Order By : 
            </Button>
          </MenuTrigger>
          <MenuContent>
            {sortOrders.map((order) => (
              <MenuItem
                onClick={() => getSelectedSortOrder(order.value)}
                key={order.value}
                value={order.value}
              >
                {" "}
                {order.label}{" "}
              </MenuItem>
            ))}
          </MenuContent>
        </MenuRoot>
      </>
    );
  };
  export default SortSlector;
  