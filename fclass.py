 #this is the class syntax
class Person:
    #static field
    count = 0

    #statis metod 
    @staticmethod
    def stat_meth(name):
        print(f"name is {name}")
    
    #constructor 
    def __init__(self):
        print(f"this is constructor")
        self.age = 21   
    
    #this makes a method looks like an attribute
    @property
    def age(self):
        return self.age
    

