/** Declaration file generated by dts-gen */

declare module 'dapparatus' {
    import * as React from "react";
export class Address extends React.Component<any, any> {
    constructor(t: any);

    componentDidMount(...args: any[]): any;

    componentWillUnmount(): void;

    load(): void;

    render(): any;

}

export class Blockie extends React.Component<any, any> {
    constructor(t: any);

    render(): any;

}

export class Button extends React.Component<any, any> {
    constructor(t: any);

    click(...args: any[]): void;

    render(): any;

}

export class ContractLoader extends React.Component<any, any> {
    constructor(t: any);

    componentDidMount(): void;

    contractLoader(t: any, n: any): any;

    render(): any;

}

export class Dapparatus extends React.Component<any, any> {
    constructor(t: any);

    checkMetamask(): void;

    componentDidMount(): void;

    componentDidUpdate(): void;

    componentWillUnmount(): void;

    inspectAccounts(t: any, n: any): void;

    inspectNetwork(t: any): any;

    loadBlockBalanceAndName(t: any, n: any): void;

    render(): any;

}

export class Events extends React.Component<any, any> {
    constructor(t: any);

    checkEvents(...args: any[]): any;

    componentDidMount(): void;

    componentWillUnmount(): void;

    doFullEventScan(...args: any[]): any;

    render(): any;

}

export class Gas extends React.Component<any, any> {
    constructor(t: any);

    checkOnGasPrices(): void;

    componentDidMount(): void;

    componentWillUnmount(): void;

    render(): any;

}

export class Metamask extends React.Component<any, any> {
    constructor(t: any);

    checkMetamask(): any;

    componentDidMount(): void;

    componentDidUpdate(): void;

    componentWillUnmount(): void;

    render(): any;

}

export class PrivateKeyCatcher extends React.Component<any, any> {
    constructor(...args: any[]);

    componentDidMount(): void;

    render(): any;

}

export class QRCodeDisplay extends React.Component<any, any> {
    constructor();

    componentDidMount(): void;

    componentDidUpdate(t: any, n: any): void;

    render(): any;

    updateQRCodeImage(): void;

}

export class QRCodeScanner extends React.Component<any, any> {
    constructor();

    componentWillUnmount(): void;

    handleError(t: any): void;

    handleScan(t: any): void;

    onClose(): void;

    render(): any;

    stopRecording(): void;

}

export class Scaler extends React.Component<any, any> {
    constructor(t: any);

    componentDidMount(): void;

    componentWillUnmount(): void;

    render(): any;

    updateDimensions(): void;

}

export class Transactions extends React.Component<any, any> {
    constructor(t: any);

    checkTxs(): void;

    componentDidMount(...args: any[]): any;

    componentWillUnmount(): void;

    metaTxPoll(): void;

    render(): any;

    sendMetaTx(n: any, e: any, r: any, l: any, i: any, u: any, ...args: any[]): any;

}

export function ERC20Icon(t: any): any;

export namespace ERC20Icon {
    const defaultProps: {
        size: number;
        tokenAddress: any;
    };

    namespace propTypes {
        function size(t: any, n: any, e: any, l: any, i: any, u: any): void;

        function tokenAddress(t: any, n: any, e: any, l: any, i: any, u: any): void;

        namespace size {
            // Circular reference from dapparatus.ERC20Icon.propTypes.size
            const isRequired: any;

        }

        namespace tokenAddress {
            // Circular reference from dapparatus.ERC20Icon.propTypes.tokenAddress
            const isRequired: any;

        }

    }

}

export namespace QRCodeDisplay {
    namespace propTypes {
        function data(t: any, n: any, e: any, l: any, i: any, u: any): void;

        namespace data {
            // Circular reference from dapparatus.QRCodeDisplay.propTypes.data
            const isRequired: any;

        }

    }

}

export namespace QRCodeScanner {
    namespace propTypes {
        function onClose(t: any, n: any, e: any, l: any, i: any, u: any): void;

        function onError(t: any, n: any, e: any, l: any, i: any, u: any): void;

        function onScan(t: any, n: any, e: any, l: any, i: any, u: any): void;

        function onValidate(t: any, n: any, e: any, l: any, i: any, u: any): void;

        namespace onClose {
            // Circular reference from dapparatus.QRCodeScanner.propTypes.onClose
            const isRequired: any;

        }

        namespace onError {
            // Circular reference from dapparatus.QRCodeScanner.propTypes.onError
            const isRequired: any;

        }

        namespace onScan {
            // Circular reference from dapparatus.QRCodeScanner.propTypes.onScan
            const isRequired: any;

        }

        namespace onValidate {
            // Circular reference from dapparatus.QRCodeScanner.propTypes.onValidate
            const isRequired: any;

        }

    }

}
}
