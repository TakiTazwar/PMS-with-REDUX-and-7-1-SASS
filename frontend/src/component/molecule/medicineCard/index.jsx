import React from 'react'
import Image from '../../atom/image';
import Label from '../../atom/lablel';

function MedicineCard(props) {
  return (
    <>
        {console.log(props.med)}
        <Label class='single-image__label' name={"Name: "+props.med.name}></Label>
        <Label class='single-image__label' name={"Category: "+props.med.category}></Label>
        <Label class='single-image__label' name={"Price: "+props.med.price}></Label>
        <Image class='single-image__image' url={props.med.imageUrl} name="Medicine Image"></Image>
    </>
  )
}

export default MedicineCard;