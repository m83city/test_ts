import React, { useEffect, useState } from 'react';
import { Select, Button, Modal } from "antd"
import 'antd/dist/antd.css';
const { Option } = Select;

export const Multilanguage = () =>{
    interface IOptions{
        value?:string,
        label?:string
      } 
    let listLanguages:IOptions[] = [
        { value: "af", label: "Afrikaans" },
        { value: "sq", label: "Albanian - shqip" },
        { value: "am", label: "Amharic - አማርኛ" },
        { value: "ar", label: "Arabic - العربية" },
        { value: "an", label: "Aragonese - aragonés" },
      ]
  
      const [addLanguage, setAddLanguage] = useState();
      const [itemSelect, setItemSelect] = useState<any>([]);
      const [listOptions, setListOptions] = useState<any>(listLanguages);
      const addOptionSelect = (element: any) => {
        setAddLanguage(element);
        setItemSelect([...itemSelect, returnOptions(element)]);
      }
      const returnOptions = (options: string) => {
        return listLanguages.find((e) => { return e.value === options })}

        useEffect(() => {
            setListOptions(//filters the languages you show the customer in the selection step
              listLanguages.filter((arrayOption: any) => {
                return itemSelect.map((option: any) => {
                  return option.value
                })
                  .indexOf(arrayOption.value) === -1
              }));
          }, [itemSelect]);
      
      
          const deleteItem = (e:any, index:any) => {
            e.stopPropagation();
            e.preventDefault();
            const updated = [...itemSelect];
            updated.splice(index, 1);
            setItemSelect(updated);
            console.log(listOptions)
          };


    

    return (

          <Select
            style={{ width: '20%' }}
            placeholder='choose your language'
            dropdownRender={menu => (
              <>
                {menu}
                <Select
                  style={{ width: '100%' }}
                  placeholder='choose language to add'
                  options={listOptions}
                  onChange={addOptionSelect}
                />
              </>
            )}
          >
            {itemSelect.map((item: any, index:any) => (
              <Option
                key={item.value}>
                <div 
                style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
            <>{item.label}</>
            <span  onClick={(e:any) => deleteItem(e, index)} > &times;</span>
              </div>
          </Option>
            ))}
          </Select>
          )

}
