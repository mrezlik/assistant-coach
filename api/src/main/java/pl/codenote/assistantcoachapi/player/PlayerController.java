package pl.codenote.assistantcoachapi.player;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController()
@RequestMapping("/api/player")
public class PlayerController {

    @GetMapping()
    public List<PlayerDTO> getAllPlayers() {
        PlayerDTO player = new PlayerDTO();
        player.name = "Marcin";
        player.position = "Goalkeeper";
        return List.of(player);
    }
}
