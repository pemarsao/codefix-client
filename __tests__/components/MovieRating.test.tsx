import React from "react";
import { render, screen } from "@testing-library/react";
import { MovieRating } from "../../src/app/components/MovieRating";

describe('<MovieRating />', () => {
    it('renders without crashing', () => {
        render(<MovieRating rating="pg" />);
        expect(screen.getByText('pg')).toBeInTheDocument();
    });

    it('displays the correct rating', () => {
        render(<MovieRating rating="pg-13" />);
        expect(screen.getByText('pg-13')).toBeInTheDocument();
    });

    it('applies the correct text color for rating "pg"', () => {
        render(<MovieRating rating="pg" />);
        const ratingElement = screen.getByText('pg');
        expect(ratingElement).toHaveClass('text-green-500');
    });

    it('applies the correct text color for rating "pg-13"', () => {
        render(<MovieRating rating="pg-13" />);
        const ratingElement = screen.getByText('pg-13');
        expect(ratingElement).toHaveClass('text-yellow-500');
    });

    it('applies the correct text color for rating "r"', () => {
        render(<MovieRating rating="r" />);
        const ratingElement = screen.getByText('r');
        expect(ratingElement).toHaveClass('text-red-500');
    });

    it('applies the correct text color for rating "nc-17"', () => {
        render(<MovieRating rating="nc-17" />);
        const ratingElement = screen.getByText('nc-17');
        expect(ratingElement).toHaveClass('text-purple-500');
    });

    it('applies the default text color for unknown ratings', () => {
        render(<MovieRating rating="unknown" />);
        const ratingElement = screen.getByText('unknown');
        expect(ratingElement).toHaveClass('text-white');
    });
});