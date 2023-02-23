import Link from "../src/components/Link";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

export default function curriculo() {
  return (
    <div>
      <Typography variant="h3">ERRO 404</Typography>
      <Typography variant="h4">Caminho indisponível</Typography>
      <Link href="/">
        <Button variant="outlined">Ir para Home</Button>
      </Link>
    </div>
  );
}
