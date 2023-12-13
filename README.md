# locoDiary

simple project to manage moving companies  using ts , prisma , mongo ( no reason for the choice ) 


topics to discuss 
 tracking , 
 shift management 
 order management 
 worker availability handling


 worker -enrollment (list add remove employees)
        -leave management ( allocate users to dummy leave order : to be removed while stats . need better tactic )
        -order allocation 
        -work order notification


order -quote receive
      -order scheduling(allocate workers/vehicles and customer tracking)
      -order tracking( pending orders, manage order status , order allocation )(fetch + update status)

admin/stats -employee management
    -employee salary calculator 
    -order cost estimation
    

ORDER lifecycle 

recieve quotation + estimate load (worker + vehicle)-> get estimate date and schedule pickup/drop. allocate vehicle and workers ->
worker/vehicle notified about order . -> on order date notified to start order from workers and vehicles -> (maybe)check in at pickup location for all workers and vehicles.-> on order completion status updated . payment registered.



er diagram 
![alt text](diagram.jpg)
