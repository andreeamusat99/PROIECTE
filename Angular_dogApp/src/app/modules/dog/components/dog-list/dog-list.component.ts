import {Component, OnInit} from '@angular/core';
import {Dog} from "../../models/dog";
import {DogService} from "../../services/dog.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent implements OnInit {

  // doggies = [
  //   {name: "Rex", age: 1, race: "Maidanez"},
  //   {name: "Fifi", age: 2, race: "Bichon"},
  //   {name: "Misu", age: 4, race: "Ciobanesc German"}
  // ]
  doggies: Dog[] = [];
  currentDog: Dog = new Dog();
  dogToDelete: Dog = new Dog();
  editModeOn: boolean = false;
  closeResult = '';

  constructor(private dogService: DogService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.fetchDogs();
  }

  fetchDogs(): void {
    this.dogService.getDogs().subscribe(data => {
      this.doggies = data;
    });
  }

  onClickWoof(): void {
    alert('Woof woof!');
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onAddDogClick() {
    //Adaugare fara BE
    this.doggies.push(this.currentDog);

    //Adaugare REST API
    this.dogService.addDog(this.currentDog).subscribe(
      data => {
        this.fetchDogs();
      },
      error => {
        //alert('An error has occurred: '+ JSON.stringify(error));
        alert('An error has occurred: ' + error.status);
      });

    this.currentDog = new Dog();
  }

  onDeleteDogClick(index: number) {
    //Stergere fara BE
    this.doggies.splice(index, 1);

    //Stergere REST API
    this.dogService.deleteDog(index).subscribe(data => {
      this.fetchDogs();
    });

  }

  openDeleteModal(content: any, index: number) {
    this.dogToDelete = this.doggies[index];
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.onDeleteDogClick(index);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  enterEditMode(dog: Dog) {
    this.editModeOn = true;
    this.currentDog = dog;
  }

  leaveEditMode() {
    //Editare fara BE !!!Comentati/Stergeti cand folositi REST API
    this.editModeOn = false;
    this.currentDog = new Dog();

    //Editare REST API
    this.dogService.editDog(this.currentDog).subscribe(data => {
      this.fetchDogs();
    })
  }
}
