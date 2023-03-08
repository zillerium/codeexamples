


fn litres(time: f64) -> i32 {
    let a: f64 = 0.5;
    let b = time*a;
    b as i32
}

fn litres(t: f64) -> i32 {
    t as i32 / 2
}

#[cfg(test)]
mod tests {
    use super::litres;

    #[test]
    fn sample_tests() {
        assert_eq!(litres(2.), 1);
        assert_eq!(litres(1.4), 0);
        assert_eq!(litres(12.3), 6);
        assert_eq!(litres(0.82), 0);
        assert_eq!(litres(11.8), 5);
        assert_eq!(litres(1787.), 893);
        assert_eq!(litres(0.), 0);
    }
}
