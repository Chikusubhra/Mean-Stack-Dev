class university{
    String name;
    String location;
    String state;
    university(String name,String location,String state){
        this.name=name;
        this.location=location;
        this.state=state;
    }
    void display(){
        System.out.println("name: "+name+" location: "+location+" state: "+state);
    }
    public static void main(String[] args) {
        university un1=new university("GIETU", "Gunupur", "Odisha");
        un1.display();
    }
}