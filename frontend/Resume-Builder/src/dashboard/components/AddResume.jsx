import { PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/ui/button';
import { Input } from '@/components/ui/input';
import { v4 as uuidv4 } from 'uuid'; 
import { useUser } from '@clerk/clerk-react';
import GlobalApi from '../../service/GlobalApi'
import CreateNewResume from '../../service/GlobalApi';


function AddResume() {
    const[openDialog,setOpenDialog]=useState(false);
    const[resumeTitle,setResumeTitle]=useState('');
    const {user}=useUser();

    const onCreate = async () => {
      const uuid = uuidv4();
      const data = {
          data: {
              title: resumeTitle,
              resumeId: uuid,
              userEmail: user?.primaryEmailAddress?.emailAddress,
              userName: user?.fullName,
          },
      };

        //GlobalAPi.CreateNewResume()
        try {
            await CreateNewResume(data);
            // Handle success, e.g., show a notification or close the dialog
        } catch (error) {
            // Handle error, e.g., show an error message
            console.error('Error creating resume:', error);
        }
    } 
  return (
    <div > 
        <div className='p-14 py-24 items-center flex justify-center
         bg-secondary rounded-lg h-[280px] hover:scale-105 transition-all hover:shadow-md cursor:pointer border-dashed '
         onClick={()=>setOpenDialog(true)}>
            <PlusSquare />
        </div>
        <Dialog open={openDialog} >
  
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        <p>Add a title for your new resume</p>
       <Input className="my-2" placeholder='Ex.FullStack Resume' 
       onChange={(e)=>setResumeTitle(e.target.value)} />
      </DialogDescription>
      <div className='flex justify-end gap-5' >
        <Button variant="ghost" onClick={()=>setOpenDialog(false)}>Cancel</Button>
        <Button onClick={() => onCreate()} disabled={!resumeTitle}>
        Create
        </Button>
      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddResume