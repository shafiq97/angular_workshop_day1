import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";


@Component({
  selector: "app-car-list",
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: "./car-list.component.html",
  styleUrls: ["./car-list.component.css"],
})
export class CarListComponent implements OnInit {
  displayedColumns: string[] = [
    "make",
    "model",
    "year",
    "price",
    "mileage",
    "color",
    "actions",
  ];

  dataSource = new MatTableDataSource<any>([]); // DataSource for MatTable

  @ViewChild(MatSort) sort!: MatSort; // Sort reference
  @ViewChild(MatPaginator) paginator!: MatPaginator; // Paginator reference

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars(): void {
    this.http.get<any[]>('http://localhost:5001/cars').subscribe({
      next: (data) => {
        this.dataSource.data = data; // Set data for MatTableDataSource
        this.dataSource.paginator = this.paginator; // Connect paginator
        this.dataSource.sort = this.sort; // Connect sorter
      },
      error: (err) => {
        console.error('Error fetching cars:', err);
      },
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  deleteCar(id: number): void {
    this.http.delete(`http://localhost:5001/cars/${id}`).subscribe({
      next: () => {
        alert('Car deleted successfully!');
        this.dataSource.data = this.dataSource.data.filter((car) => car.id !== id);
      },
      error: (err) => {
        console.error('Error deleting car:', err);
      },
    });
  }
}
