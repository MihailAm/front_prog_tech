import { useRouter, NextRouter } from 'next/router';
import { Doctors } from '../../../../components';


export default function SpecializationPage({params}:{params:{specialization:string}}) {
  return (
    <Doctors specialization={params.specialization}/>
  )
};
