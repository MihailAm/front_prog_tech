import { useRouter, NextRouter } from 'next/router';
import { Doctors } from '../../../components/Doctors/Doctors';


export default function SpecializationPage({params}:{params:{specialization:string}}) {
  return (
    <Doctors specialization={params.specialization}/>
  )
};
