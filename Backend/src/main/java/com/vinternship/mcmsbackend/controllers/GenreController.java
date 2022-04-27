package com.vinternship.mcmsbackend.controllers;

import com.vinternship.mcmsbackend.models.Genre;
import com.vinternship.mcmsbackend.repositories.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class GenreController {
    @Autowired
    GenreRepository genreRepository;
    //hello
    

    @GetMapping("/genres")
    public ResponseEntity<List<Genre>> getAllGenres(@RequestParam(required = false) String name) {
        try {
            List<Genre> genres = new ArrayList<Genre>();

            if (name == null) {
                genreRepository.findAll().forEach(genres::add);
            } else {
                genreRepository.findGenreByNameContaining(name).forEach(genres::add);
            }

            if (genres.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(genres, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/genres")
    public ResponseEntity<Genre> createGenre(@RequestBody Genre genre) {
        try {
            Genre _genre = genreRepository.save(new Genre(
                    genre.getName()
            ));
            return new ResponseEntity<>(_genre, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
