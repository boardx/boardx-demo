import SvgIcon from '@mui/joy/SvgIcon';
import React from 'react';

export default function PolygonIcon(props) {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 15 15"
      style={{ width: '16px', height: '30px' }}
    >
      <svg
        fill="none"
        height="17"
        viewBox="0 0 17 17"
        width="17"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path d="M0.5 16.12H16.5V0.12H0.5V16.12Z" fill="url(#pattern0)" />
        <defs>
          <pattern
            height="1"
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
          >
            <use transform="scale(0.015625)" xlinkHref="#image0" />
          </pattern>
          <image
            height="64"
            id="image0"
            width="64"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAUDUlEQVR4AcXYBZAdN/bv8e+R1JeHxwyxA6bE6/zD9ZaZmfm/zMzMzORlZmbGwG54OYm9ieOYGcZDF1o679S7veWpPI8zQf+qPkeaatlVOq2+xLHIviuucAdf+pKXj7zrffcwHEtYOSYm7n333zbnNfTgy1/2AsOx4nTfTo6FNG/xleWhRPXiT3yU/1z+dVl9zlzDbc1Z4ViIpfLGmNUorTmR2u4/PU6/9JpfJZefZbgtOSscE8PD+/OxMdBeslVrqLc3rpG1z/+Fbvj30wy3FWeFY0HarUMp78D4JJSHCEtW0+PGhvz33vk53bjuw9mSU8uGW5uzwrFAqTSRnML4BCQPlUHcwpPpGe6ldNH3X9T+9nt/pBNjCwy3JmeFYyGtXtNEgMlJyBUkQL0fmbeMxnGzqVx36X0633vPz5k4tMZwa3FYOSYavbl6n7TdgZRABHyAag8ML6W2dCG1vevWdL7x1l/kixfe3XBrcFY4Fti1rYzLnSAQgWTUSIBKHQYWUlm8mDr75uu7nvYD2b//IYZbmrPCscDoyKCgkJUMRQScmAClKvTOo7xgMQ0O9qYPvuSrqbf3YYZbkrPCsSC7Ni33APUazHMwH1ABgGAqwZShPovSgvnUq2MNfevzPyWlyp0NtxRnhduaO3HlLHfuzx+f1QR6GlARWAUsEnAOStJVC1AtQ2WI8oJh6rpnlr7pZZ/SJUuWG24Jzgq3uR996/nu2mtW+dlzoFaCtoAAqxQWAsmI8QI1D5UKZANUlvRQ2n/NCn3tKz4gJxzvDTdXsMJNSb5353BmmwDO4yjpnHl2pfTlr9zDXXXVdXra6UP6258/PT/3x48tzRPo6YXgQRQ6DsrA8QoR2Ge8QHBQ9dCqQqeP2rJx4qW/uX9cu/blwHu4mQm6di03JeWTlv6fyo+++/gbasDY8NyTZO07v+J9XnHnfs+l0X3lyoKM0pxh6KtDAirGKbQESsBxZsK0jDM1B00PkxVcqYfyrBHGv/bpZ/vv/OyrwHZuRoJ70AO5KSl94fP3d+OTK0c+8hEBlGniP/npR8vB3QPVUxcggwvBLwMn0PBQdaAeGgIAqtAGKgoLzMYEquBNQ2A8wESF0qxRmuuvXcJPf/Zw4GPcjDj7T7ixZN2VD6qc++Nn0ihN9r3uFWo4Er9zdDa///5jQj9IXxXm22TukI0DMNgDrgr9JeiZ8lkgFk3oV+g1OaCmZKoCkuF8mawC6Vc/eTSPfHhmuKncjf4HJx1/x54vfeATLK2SQrbJMB3W/fP2HNxwQjbkYW4NGhFqOWQKHSBzMN94EwWUrqQgZthgOgaBivEmd/gG6MYrV7FpyxLDTeVuzOI0Prm4/sWPfcb1TSxEPfnxy/5hmA6//ObTfAI/qw8qNeg4yE1LQM18UwVyA6CFZHLTUOgzHZObElARyAVXAtJ4D3/+85DhpnI3ZnHtUx95lWf7CmYNoqkykZ9w4q8NR9I+5cw78o/f3TvrA+nvAS1BFMi1a3ZxzDsmFXTKGBNQnAIP5AqYCqCCAOLbQVNeN9xUbqYL5fT/GQ571t+L+YOwcTed2SecWznvN5cZjoQr/nIv6XRC1leCagM0QALaZkBhdoKooAZAp8zRrmgqJjO5icXcmQiKoictLxluKjfThbJ54xrfHDmR6NARP9a864M+bDiSif99xWz9048e5Uvgexrga6AOOkDdzDcAiSIKQhdTm2Ich18zciMJvKIRcGZyIjfcVG7GC9utudKahGv2M/HAJ7zRb9v0G8ORyPm/uQ9b1y3LeoFqHVwGScAD80zJRKNamDKnSFKIgCg0iuu5USOpuzwE9Vde0TTcVG6mC7VW82wZobV41VvC3y78kGE6um/DqT5AKGdQqoJ4iMXz3Dt1I1pI4NQAaAHQoglVBW/yBDGCS6QIkLVZvnLScFO5mS70O3eNT9zvsR+efN6L32I4Gnauu51k4EoZhDIkDzWBISApqMEI4Iy/HlcQo8YX86iQEqqJmINIZYK580YMN1XAykzSXjjn3Ljq5D8B6nbsbqR6bRxQrpewfc8i3Xz1KimBhAx8ACcwCyibXEHEAE7BG8fhpELEiAGSAUhqIporKQff6Bl17c4IU9I869Re1273AluZQVy+6iRmIi5bvpc83xcuvOiJ5U9/5KuOTsNwfWxYf5yO75/jMsBnoA6qCj0mGsEoBJMBAaNQAsoYgZLJjDdi1FAkNx1FI7hG314/fmjUUKD+ux+uqn78I++V3sGK4YYEK8w0qT0xr/qet7+H3lq7pSlxhNi7xWxi00kFcA7EDAgEQBUcEEwmBnBiAM+U596BAG0FcYBR3523BNpANPVaS+fP6TAlctm6tn7za49wtzv9POBT3ECc+9lPmKnsg+99ddi+aZ4unL9borQM16cnLOmRNgCgxcZrCVQBQBQyoEJx18U4yJwRCCbDCOC6cpM8uAxiQFSQALp/39xUrQ0aCrTW3H6WtEcy+crnnsZd7u4NR+OwMhO6YNE54Qff/F+3chbaGWnI7h01w/9n66aqehAAFagkCCYZFDJTA0oYMUAmpmhEyQTj/stDCiAmlCFr2LRCqEK+69ql+tvfPdxgiKEa5Bc/fHz5pF7YfdUp+u8rVhuOJlhhJnGf+eCrQ2tfL8uXwcZdS9i54yTgcq4X2bm1KgIGXHH3UUhAplB1UBLwBTEADQEFxhQ8RsFJVzTedTXMAFRQYhwn//S73svptz8jnbhyo3/F0+5QHdt+b798Efz5ikr687mPBP7OUeJsETdEyuXV9tH2bu44DwN1XByt6pV/v7/h+tKc4UFyEBHITEmBaBKUFarGA86IAKZmGgaDAyngQUxufICsDNU6DM/BzT+RnkWLaMzNGuUr/vTU6nfXvq1x4Op7lxfPRvcfQDNI5/36/uEhj8wM03FWuCHyy+88k/ZEj5tXhkYiWzob/68/Pob7Peo4AwX3uBcJm/59hsvAew9ZAA+g4IoGBMCpAcRUBRrFH9E4IwUHqEDHgStkGVTK0DsAc5eSnXA7aqeeRu3M/yGccCKMHCLt2YXWQXddc5Ju3rzUMJ1ghaPFVSrDXPDzB8swuFKCcAg5aQnVvZesHH/3M7/DnR7xGk459V+0OyX9/hefr//8w31KfeBLFciM88ZBRboEI0DxKPQATiEJqEG7RA1dSbvEkEwxajTJKNCEfBTG95NaEUpAPlZj84azgf8wTYIt4GjRuXNP0clti3wvQIT2KNQnCatXU//HZWc1v//+X6Xfztmuk5NVN7J3djYE5XoFevuKX3MDBF88+8Z7wEEAGkaMSrEvLQBSnBpvsggxgZoYIeUmdpGDb0I0aQyyDqogEdToJX++S7j3Q78DtDhCgh+YzXSJp58p8pOv3DHlimQACcbGwO+Fcj/hlNNpzNmZ6bYtx6mbRIb6kVoNalWomFoFyhlkHirh8OcCJ1AzmYM0pQk65fuAGGd8ggFzIEKMJodk1GC0Y9rQbkEnQgA8SDQO0rXrTk/XbZgLbOIICXaR6eLak2X+/uc7aAAEVBWZGAc5AKUErgrDA0hvA2lNQKcD3kEpAzHVABVT9sXdN5hMoOoAAQEch0c16OHPA7kZVBhJsNto7OrkUOtAZvbmECPkxeOQAZMgAdLI3rm6Y+sJ0zbALjJdnM/7dN+WZQRAQZNCqwmMQUcgdIDMCGRiMnBiAqipeKiaioPMH25AzQQBdQDgTDIuAUYAEpSAjoKaBcYlOGhKZsDMKR6N/SYqJKPGgUTAm9hs6DXrFjNNgl1kukjnUL9OHhrEgyqkCL6VQ5iE5GFSwZUAD+IgGG8EUDNY3Omyh8yBM6WiKSLgjAAAQY1ANAKgUC7+BqiZhWbItBQwxecGnFGDSQACqgiQUqecdm1vME2CXWS6aGiKdlpligbEqIRWQuptaDRhHxAThAA+Mx6cgwj0KQwDZQ4ff/nvaRDAgQhQxJksFXPtUgfJUJj6OtEycerviMkoalSKNQmTBz10MDBNgl1kuriTl43q/g25RsqqoDmkXPExQq0N6mCPQFOhDAQTHfQGWAzUTUkM4KV4O5zyKIhBDMUdj4ffDcRkAsmomZpi0zjTNp2pL56gdKEmoWCmSeAo0RWr97P1igPsHalrDTRBysHFhKQIPR3IBMYBBMoe+hTmJxuLzZeBrNh8WYpHwYOEYhRQgAQVgQgkgaggHkhGCoBMmUczbmICiUZRAQoaAQ259A9uYpoEu8h00VnzmzK0cB3XbluodYg18EHRTkI0B3XQYwZN8FCO0EhQU8iA0pRvesXdJwvgjMu6JEBxvHDt7rxpvIc8ghTNEzn8GCRAzITCWAJnkiGRREkUT8UkSLky6U5ccRXTxNlFppP/4feqa875rThIh8wBM24mQFMClwMd8DlUI9RMFk2Ckinr1G97xTe9YMqmBlkDDf1o1ofNTRVqZag48BRvhSaYsqlSUKgDk2Y8QTCSUGeA1DEt0CZIfWCPW3XqXsMRWeFo9A73/JEfKOeaIDUhHoK0W9FDCTQCRvIuHyFLBTUJgnaVMAF8CUINzRqo77VxGA1DpDBgYx+U6tCoQj1A1ZkpvxCVgLKpmLLCgQS58TloRHMltswkaAKa4O5wtz/pgx500HAkzgpHw+zFV7uTTv2LdCApRAf5JMT9oDFBXnwsxRRNwCUIETLt8qbsTBmyeveO+wa2YTPLdJug2RBk/d0mVKtQL0HVQyZGuwKHm6umHWHSTCRiG/JogBRBKk7lwY9ca98Oo+FInBWOJu3apvqI57wn9GdJOxCB3EEcUxIKkkwsJKD422mXGAdUi5/IQy/qjW+YIXCDYCN+ALUxhWEI/ZBVIfz3rZXD/JSf0o8z/aaZk2zMe5Q8QRLQUQh3vOev3Gmn/80wLSvcEL3n/X4hZ97jZ64JKRVNmDAdJTkFl4o7b1xeNCKCJpNDWaBSAVdDXQ+4KvgGyBBQM3WQXnAN1PehoRdCHXzJOAOgBkC78gizzB1zk8jXKHmAXCGNgRvsH3GveuMLdcPVapiOs8KMPPV1rwzHLdrCOEQP+RjEEUh+yilwxv/3+JuQQ0WgUS/u/IDpA19HZRCkz1RNzfR2uV6SG0QNvgdKFagHyACfTOxyCVKE/py4ItHJoTNWHP02hGe97G16/h+uMRyNs8JMpL/8cb087mVvyQQovpR1dkGOopLA4IpGZDn0AQMl6O+Fch/q+1E3YHqBHjNs6qZiqsW8z/SCs7V+EA394BvdJjQ8hP82OT/8DpQicRzaWyDvAHsge8gTPst16z9guCEOKzOV//2yz7sHPuVTYQKSh3jQjJqgQAIXuzAeKFeKo9zb3bz0g9YOb1RKSJcpGkEDtBeVvu5pcXVTPArFxhHjIpgUEu2tSr4X0iEId7rLL9zL3vpiw4wUkxnrvOwjL/N3vs9v/SSkDuSbISaFkADjDBFy4wL4Wncz9AM9IHWUXkTKJhQy+H9jCaRiakCXujL4AERTbFyM5JDldA4k2teC7oHystPO92/7zFPQfMIwEwErM8qGf5ziWq09DnbF573vJdnYhl+0tl69OO6HfAeEgYR3EcQ4E5uAglRRqcPU4y414xEJgDMgRBRFNKAEIDMBxBsgNYG26YDm4DvEVk5rvZJ2QWnZyf/0T3rLU7hm/W6YeZy7Zj0zMjq5MnzjU99wGy99ZPbLz10hD37BG7ISqIe4zexTNBR3RiLkE9AeRV0ASihlUwLKhzeHR8SIA/wUzsjhtzudgDgKdLpCG83btNYl4jYoz5m1X177uaemhcMbDDeGm/HiFSd9VwaX/sh97YvfKf/9d1eWzv/uIwmiBEhJya+DNJIgy0GMRmjuRtIoiAfEOBMOb9KoYgSYCiCZCNKC9nZIYyAdCC3oNOmsz8m3di+7k874g8v27fG7Lr9fdvHv5hhmyt2Yxen0ZR/Ln/iWx7c3jCwMF138gHp1lngnqIfYVvKNih7KIbTBR8gPwsQ/gBGjoAajgkEVQAzFPB1+1mmD5Ijtks6O4s43oTVJ5z85na2gaqrAlX96WOmtT1nvL7j4CZ1Vd2gbZsoVkxlLZ576jfZLPnTv8cFl69K+/ZRUUQcpg7w5tQlN8Dm0rkaaf0ZkHOigaohGi54oBjShRjWCtkESkrZB82+g4+AnYXSSfF1OvrP4Nx3TBs2GD8YTH/zG/A6PfrKbGD9gmCk59MufcVOik2lh/MkH1uqOcx+YhsHPNb1CqJthh1/m8XMDZM6U0N7HEsP9Qesgg6aOEEAESKA50EZ1DBjDcQ2u+VloXgW5oLs6RLvzcVckPxCJO0FbWWTuXX7gVj/6VcBGbkLk0Dc/x03OnBWi537thZ1NP34NfsccPxv8sBDqDmsGfpHHLfBILUGpj1R7PsndHrSGyhBCBjiTTMc0Tcvswnc+ibR+D5MB3RZJm3PSnjb5PkhjIWrttPNZ/aS3A7bopkdGf/hxbnbKixelC9e+Xkf/9FhpNHv8LPB9Dtfw+CEbF3qkrwnl5cTKi1FONMUnQZxR0zEtkAlC53NI+2swGtBNHXRbm3QQYqdvMrllFzF4zkd14d1+DCg3MzJ+/g+5pZK2bThZRy99uYz85sE+OzDgGuB7QQYEtzhD+tto9V7E8tNQnY0yB/AGoAMihNZXcOPvhYMKGyGNNWKKs66N9bP/GOc+6POSSpcCyi0Umbj4e9ziaR5aKgcvezITf3+Ac7uWObenx9UO4RYBg6D1J5Eya4TMR7UXoiJ5wrX/Rph4KzSb+9PuBZuSLr881Vd9T7P5FwKHuBUizb9+ilsrnYG7luh0lrnRzfd07evu4GTTAlfb1CulBdWUneZUepLKUBN14yrl/Z4LrxT3n4tSOuFybc/aAjS5lfN/AbzlBsDj7Q0wAAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
    </SvgIcon>
  );
}
