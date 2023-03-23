package com.osakak.jusangnakwon.domain.liquor.entity.liquor;

import com.osakak.jusangnakwon.domain.liquor.dto.LiquorType;
import com.osakak.jusangnakwon.domain.liquor.entity.similar.SimilarBeerItem;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
public class Beer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 100, nullable = false)
    private Long id;
    @Column(length = 40, nullable = false)
    private String name;
    @Column(length = 200, nullable = false)
    private String img;
    @Column(length = 100, nullable = false)
    private String type;
    @Column(length = 100, nullable = false)
    private String country;
    @Column(nullable = false)
    private String description;
    @Column(length = 10, nullable = false)
    private Double aroma;
    @Column(length = 10, nullable = false)
    private Double appearance;
    @Column(length = 10, nullable = false)
    private Double flavor;
    @Column(length = 10, nullable = false)
    private Double mouthfeel;
    @Column(name = "liquor_type", length = 10, nullable = false)
    @Enumerated(EnumType.STRING)
    private LiquorType liquorType;
    @OneToOne(mappedBy = "beer")
    private SimilarBeerItem similarBeerItem;

    @Builder
    public Beer(Long id, String name, String img, String type, String country, String description, Double aroma, Double appearance, Double flavor, Double mouthfeel, LiquorType liquorType, SimilarBeerItem similarBeerItem) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.type = type;
        this.country = country;
        this.description = description;
        this.aroma = aroma;
        this.appearance = appearance;
        this.flavor = flavor;
        this.mouthfeel = mouthfeel;
        this.liquorType = liquorType;
        this.similarBeerItem = similarBeerItem;
    }
}