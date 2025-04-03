import { Component, inject, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Observable, switchMap, tap } from 'rxjs';
import { Pokemon, Type } from './models/Pokemon';
import { PokemonTypeDetails } from './models/PokemonTypeDetails';

@Component({
  selector: 'app-http',
  imports: [],
  templateUrl: './http.component.html',
  styleUrl: './http.component.scss',
})
export class HttpComponent implements OnInit {
  private pokemonService = inject(PokemonService);
  pokemon: Pokemon | null = null;
  ngOnInit(): void {
    this.pokemonService
      .getPokemon('ditto')
      .subscribe((data) => console.log(data));

    this.getPokemonTypes();
  }

  getPokemonTypes() {
    this.pokemonService
      .getPokemon('ditto')
      .pipe(
        tap((data) => {
          console.log('data from tap:', data);
          // we can trigger some side effect.
          this.pokemon = data;
        }),
        switchMap((data) =>
          this.pokemonService.getPokemonDetails<PokemonTypeDetails>(
            data.types[0].type.url
          )
        )
      )
      .subscribe((res) => console.log('data from switchMap:', res));
  }
}
