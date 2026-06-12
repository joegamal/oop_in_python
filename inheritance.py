from fclass import Person

class Student(Person):

    #this is parameterized constructor
    def __init__(self):
        #we must call super manually 
        super().__init__()
    
    def print_age(self):
        #get properties from super()
        print(f"age is {super().age}")
        return
    
    def print_count(self):
        print(f"count is {super().count}")
        super().count += 1
        return

    

    
