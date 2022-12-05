import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    // fancy firebase
  };

  const register = (e) => {
    e.preventDefault();
    // fancy firebase
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaUAAAB4CAMAAABl2x3ZAAAAw1BMVEX///8lLyX4nDUZJhkAEwAgKyAbJxvo6egADgAhLCEAAAAPHg8AFgAQHxAMHAwIGgjV19Wkp6SusK74+Pi9v708QzwACQBWXlbP0c8oMSj4mS0AEQBrcGt8gHzDxsOztrNETESRlZH4liBLUkvk5eT4mCFfZV+anpqGiob82bjw8fAzPDNwdXD97Nv6unnT1dP6xZL+9er96NP6u3z5qVD83sH4oDz5rl36woz7yp/81rT5tGv4pUb95MwAGgAvOi/7zqZFqBfKAAASx0lEQVR4nO1d6WKyvBKuRRAUxBWt1A1xqbV77d7P3v9VHXYykwSpteJ5y/Ovsk3yZCaTmUl6cpLjYBh2Cpvzm6ylyJGIiSoWClJ5kbUcORKwqhQ8mK2sJcnBRansk1QQ21mLkoOLlh6wpAjNrGXJwUPO0v8DlpHFG2UtSg4+FoEyyYOsJcmRgJksKYpQrmctR45EtGbKpm9nLUWOHDly5MiRI0eOHDly/NOwW/PV6Ow/U1aV0ao+WH7/BYNhY9iqffsahZvhYtYWVdnUNp1F4xdznI5Urlg332/ryUmz22o0hoPS/oTptlqDWmJAdtDXZF2TRMWPC0qaWm7PeRJ0BxGilw7Oi6ZerVZ10zzv4vudl6u6d222LRO2bHTkYlWQRD+MLArVYsJDTkdtBWdo2PWJ7ElV1YuG0ufLVYtbG4UPmvV22WuRKgv9lGMPNrPrgHiwde5oh66rxXJhwRmWzbmmCgUMUSvPmAJ0DDWC4QteG5lS9KAkT8hoSHckxy+XVGmYIHztXK5KlCSSro+ZY6xfrm6FbrBaPZgYmkh8QlD/W7AH5bwct7YccDmXK/HDgtzZEvw5L7swiDjewHtpeRb82VLUqNWKII9YEs9ljeqYoHvK53Tv1Mi7K3PvDYYInzPiodmX4TWlOOEZmNJMpinyH9L0Bn1/cySybwfQ5nQTRib9pCCzChOabeJO6dz7aaKibpITA6ktw2+DGrf73G+n/0tzJivgfWK5j99hX+oFPoQKpU41Uu28LlgUqefKgcY0J1XqmqSwx15D5XDktdGcUQNmV5bGBvs5rYBtNYulZZu2O+aYy9HJyTDoAiFW1oAlzWVpqdDvq4zgKwbl5JYqZSw5xdJcZTxn+I9NaAmcsaKwjEvfTBSkoI0wTbux1Oxwh6VoUkoBvuGxxGxSMUGbkllaaqxGCICmYZlxC0QZaRNmqcYiqaAU3D7tV5ivlCZ0W86TVNqXHD+1E0ssVYhRxEpBsTRmy1nlz03JLF1y9Po8fkF3O0mOnwXHMGaJ01Van0j5Y6iUFepvJcnpCTRx7MJSc5REkiPZOOEbDks1mf0ca+ClYWkVzvKipquk5yRHXtYSTVucZsLOgSzVuUw47h9nnDjMK8h61ZkKiaFCtd6FpRnPU4q+0eB/w2Fpxps7q/Sctp2l5sAI3iy364PBcFaOX/9feHMnYbomYACnDLE04fWU0B/SnkMI5LLZUprhEvhYP2GJOYei+2vcb0grnipRsqViSVgW/HbL4ZqnFE+alUDuAf6koJuyqQq4xypgagQsKaMzbnOVS35XSCvQkBUyQ4qmmnJRpwaRBtyOdCzphPTUHCppmoBeIo0SWOpzx7Vyxgsb8FkqjD3NFnWibmUcOVGa/wNqpGD2W7WSPRhrqM9EYHMBS4VUOsBo06bJfaVjdS7nXbtUcxbkqAerYLw0J2lsgUgwi4yHUJzN6+OODD+vk8oHR0I74Tsaz+QlsORBugS2ahFaINXjDmmvEU8/eCo3krp0N8ikVizAZCFK0ZrYbsNuRSrYkg0MapYk+3wIF3Zq32/XcgVUTCkQsrH1VRTp0VnhOeNbWBIvkRKGXxS8te0YdLdBRm76kAmVHCYMlipGVflPZrMn6nLZMCu4VSqh5GDl6Ehd4l1ytBq1qInRRR+SiCdQjxP8QfeadJdYLFXk9uTMwM1FIyg1S1UciqkFHkVBcP86IxukQQ9UAY2tkgxSLIla3f1QacyamfVRy7loNwroKfKVIOaEZu8B9EDOtsWgsTMjkCFNoEoCOd0DU6gQX6FZcprrXlgu0Cpc5PniySwV6VrK8JOG88DSIL+hwRvHsONIZcYsie1wMHQ1yg7I0XhFUwJpH+rk2leAfj/qpcoWlsbIrVRJyaEXLYKQMCCQmP4olsRoFhlCmpRLjkyJLLFcw0bwgOtUdMlpSUCLOTiEgaJRU3388TpejBCdtASqC/xjYF9VtIhfga41k8PPA6TOwoy4aIM2QQPVBDpIVHRjlhTCGYGeKdfJS2SpyGiQHdBfcZcrbVmvhIkcXMNsg9AOGN+IJZLBJmSiIJGdhNSTYKkrq1VN8JdMYhu1dQ4eKyYmc5ZoGa0AAzkHbdJhi+EkHVtdzFKVWOjZaCXD0fMkltirrCLZ7d1WY3w+EspyUcYboEqgbwQyko5YAs4aWvcUSa/jhsvSyXIwrPdnl6phqlQ1NTCH0I+h0Ee6rILcHjB4yiXsU6iF8dBDLCnAIQMKqHBC/Yks6cz2BN8UAYWlG2oGa6ZlCW73aAGj4kdcQ9hg/cvI+jhftQeUrjTAKxNZGiJ7p4E0TQl6ix347BJ8JvYEEEtw1lyArpA4ep7Eksh8IrjM9Uci4dKyBMXuQrHBWFheAp+SxRIL6VkqoSU2Mp5QWwSUaINsxKYSey/g+1DPd2AJSxEgZH/Eb6wvXFqWgPt3YgMPHrkkbYX7XAKGqVmaIbcGWRM4L1JrUBAOiJ9F7G3A4gZGmndgqcouLwjnYp7XGMKGCsNnCX6nlGTVwAI1NUvQe0hgCYfVdeS2QmdRxUZ+wR58kCW0na8LPrkDS3Qm3G9KoKNn7BeWusP6YtbWyjCUksASbO0SsFSBge/Rd1iyB435qrMxDegQ8FnCCwSc8IG+dkHH/QNVLfLTIUvIJavBZfL3WdLYJSANLku1YX/klj5poXOekiXQbZAlpM8pWWoO5rMzx9urRoVnqVjCkVcBeVzLDVyv4S6Fc0zkXECW0JK7Bta132dJEdhPhCwVYMcMZ7JZxSH8VCzBBQxkSYdFbmksnj1vG6rGzzZxWcKJbhW/H64tYOTBBZz/Is8DsoTiaPZPWeJMPCyWaqsynckBOBRLw7bMrNWIwWOpi0gCQQcPNgq7YZagJxAtpxBL84R3fp8l3q51mqUSmcXl4DAstQrq1qwehyUUOnc8acrgd5FzgVniXG8m2emfWjzegohiqb6do72xlOiJL2dmiowih6XkoIMHVJ9xtoUlMWgXZAn57z/1HvDSOgRmaZaqKiQ1S6WdWaoxagcZYLPUSgw6BPdsYekGubVHxNKIrqiRtKquFmGzf1+XuhXK2CmSpqtqMSEfGX81MegQ9NUWlmpHy1IHj1/B1Gfj4aBbu0m7qt0PSzVcESNWjM2q3hrc2PMExz8ADjowi6626dLRsrRAjpFmjsMPpY4Q7YWlJs44FNuNKNe2NUK0LejgA4bx6AD2DTIfx8JSDRW2koch7sjSjvMSmvylM+LBrdFWGwcd2E1H846U7D1ELGbOEhrABtkBB9UlWPdQEDrktLKVJRx0oPrfh822aBGQrm2Y66XDszSAyzy4t2J5SJZgOFqEeyu2sUQFHRgbnVyUYECDiuNB70Jhxx4Oz1InIb11UJZsqNOo/xrJudouKkcReIXAS/B5OiYOvxOtNzNmqQlnJVgLnj6jvgeW6glVI9syFymCDiFgBVEVqxz8ThT8zpgllMFC99dgdcqvsgS7Dz2E8j6YpRRBh+hWuLjAjiDKL4UBu4xZGiekXHGl16+yBDPtBR1V4qDkHWQJBx2EhDO7UfobW8ZUudqDszSDSTGU2q2zc2KeaHtmqYaKdJDJgsk7lHTcoMWwsur3F/PGsMsouoJdigOd0HRGLl7WLI1A81B1GnItwNv2zVKXndgJYEMeYGLxnIr9SYIgaBVdlYuTMWoSch9QULwEtDJucMYsbYDIqEObyL2VSNH2zRJcqLShLjWgJGA6aSSFikVNleFxHrBYEAkHHf6YjYxZgm1CJQq4lFgmBNg3SyjAJkGWUHU+2S7K3lGQVG0cvw5OYsiXBNOSEq+MM2YJ7uFDMmNLQmaS98NS3F5U2w3qYen908Re8EaKDdMFLd7ODFmF1ck2nIfj3suYJbStTSXv6lP2Xo9ni32zhJLhwE3Dhd/A3VylyF+6LYu6AjYL1DD0edYwY5agfxDttfVuos9CITpn3yzhEi2iMVROokDWQnaolBQbZuhGoF21RP3cAPp/bd7OtIOztEAdEB+qVGftwzYij2nfLJXgeonYvddkbfuPq3u4u+MRYqVBAcPI3YaF02ADfcYsUdv8DV+bah225xQV+O2bJXr7XttXlyHePxgI0t+ZJaRMotBwGS+hXX2gsidjlmywFdBrjTxZzUSTY+2j2qm9s7TAGiMWxdmqo+ocF84c7soSFVCqyJuRgDcEV8mFVtYxcYYfK0oJE3K59Ess1Rh2TaILbONrs51ZWm7wMwr1kgqIMu3E0rBdNiZR43/E0hZHFneTWGz+EkuUyUPANRFqf2eWcFKNAXgox04szdxjKkQ5XNz8LFebWFpVOYedEB9qt3+WBonjRV/Av4tB69FWWKGiq0VTls2iW2HO3X4/30ITPhVuB5bCvfphEfTPWBpQMxPRNbOTEtkeLT42Yf8sMeJxMZxZaE6yGO16j1kSK6Y56tdb3ZpdKtm1wXB+XjDig3pgcXc/sQJRxJPLDixFp3Rt9sFSwmlnsmtUiDCZSsT5f4ElerqIes0LA8cVaYoahVsDlkRd7tTpebs5GG9k/2QDVILfp1eDESQRv+n7LEV7ohXJp+Wn9XgzNk1KsAX5PBwVBv8kgb2wdGKLbLdFu/TsbKkQdJUoxfEjjyXBmAy5hzvbc8WtPEcsnYwNXvyv0qYyHt9nqRSZqCAk+ePa1j5L4OpZ2PPBiX9lEIr9DZacpS3jVErRWAUMdP0TcoRLMt0w0zVz2/+eGkxkoYzztwOReUieyDpeN5klZjV/6DyH666f14kPBB0FnatmHCtquhXKigHzozZQwDLopibYF2bADA/IsxVx3cECL1skeRR/eOBWKGvwFKLlapHiuPabPr27o7mgj32W5AlrvQPPDSvCZKlN1o4o4ca1lv+rIgfiB1vnFSILHUzEnNLBqA40ThgNLw1dkERFEUVJ08tt2HszU9fwcO2X5Qj4TOU5eQ3tIRqS16ijck9KC82suIIooiRUiujw+BtRN7jnBH4fy7FWjLdKKYJuzDg7o1qk1PiwKnZX1MuaJGnR8VvNdhl3Vc0wnF8M6uTiULqC/wQ5vkrDRae9uWx3VvMWNTiHddrsL0sRqPubCddOkq65uKmvJpeby9Gs36DkL9X3/A+uu+ORaZiqWpSNTX+YoJVJUrO7wh53ZuR/Nlgul/jhpQv+N73L+b+39bGs3XRr+/tXFTm24+pzfeFg/XmVD8JjxN369nlqEZg+v95nLVQOEle3H5bV650C9HrW6UXWkuUIcfFhIYIiWJ9ZC3d4XJ/eZi0CjbdTi0ORq09HKPAv49M6tXpHZkOuPhI4cli6zlrAw+PUMSzWxzEZkbfI1vVi/HGW7lyaTq3nq6wFCXH3NO15Dl3v4/n94eXVwcv14zSepv4iSycnj277e9b7sfD0dv36tr66Q79evUxDll4yEStrvHvTwBHxxMY6oKn3mrUk2eDWn62Pnadn3+hZ66wFyQgXgVPVs56PyY9AuA5YOuqh9Ju4Ou2FPH0cmV8e48GX8QNPWX8I79Eaxeq9Hmc/vHss9Z6zliNLvMZLyal1fSRBzfWzZT2HY+bxr4YeSERWzzN8T1+Z5wnubnvuKskK1kd3gaofyQDKDLHVc3vDus7Uk7h4DhayoYm7t/78tOTjYgpCMVbvNiN/6v4hDjZYgYl77f3dyAPE3TOpTp7lez04UVe+pQtJCmnxnYc/u1oCeJvixJtD1AGngvvbUzKz1Ju+BReCaSk3eB7uwOwUmr6Xg8xR64ceTP5ZjxEp/sr7j3t4BNaMHFzP8Yi/ftX2XX05XjfU4970K77uRx56fzbwQOOWlc7uORP69cWvGJy7i+uehU3tabxScm958mTIfQcCjtljlh04KtV7f9vrNHX1dt3DSuRxdAr8hLWn39NclQDuH2mzFzFlPb5c7KG/rta3jxaLIfcjaALyDF7v4ecf/cewfuLxFFD18fD1uaMBvPt8e/EIYhcK9axr9OLAw8sdPBoXSTydejOVZT293759plasu/uLVzc/ztagkCM6z/XmSmJ97bN1/w628eR1ql+m8PR8ffv1tv68v7qDEcC7u6v7z/Xb68v7o3fnlKNACRz5GcC/HQ1PxJpfvkix1SPLhacuiL97yeREHF2z9PLKy6bn9o6P++e0PP0Y1vSFzcRLL48NbcPdy9T6fYp61scXT4CPfFJKg4vH31UoZ8Z64C/DLqxT649WDn0TMFK9X0ytx7ekb19b1tdhWvkP4JPI+uwNjsvx8bXFL1hnm5D8v8N6v0Q5hu5xG0U5dsH97VPSmjQ9Q1Nr+v470dscLrwY9k+YcldW+e7LA+Dq7eHJotMN2wny4upfOUMHw93n1/XT9qAPwY9D0Os6t3IZ4Gr95QdQvTAQtV85DBx9vN9e3Gde5PfXcXe/vvi6fXh/fnz8eHIzq09PH4/P79cvr2/5WQ0Q/wN7md+j3KM8vgAAAABJRU5ErkJggg=="
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign in
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon FAKE clone's Conditions of Use and
          Privacy Notice.
        </p>
        <button
          type="submit"
          onClick={register}
          className="login__registerButton"
        >
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
