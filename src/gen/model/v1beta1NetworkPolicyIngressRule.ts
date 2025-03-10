/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1beta1NetworkPolicyPeer } from './v1beta1NetworkPolicyPeer';
import { V1beta1NetworkPolicyPort } from './v1beta1NetworkPolicyPort';

/**
* DEPRECATED 1.9 - This group version of NetworkPolicyIngressRule is deprecated by networking/v1/NetworkPolicyIngressRule. This NetworkPolicyIngressRule matches traffic if and only if the traffic matches both ports AND from.
*/
export class V1beta1NetworkPolicyIngressRule {
    /**
    * List of sources which should be able to access the pods selected for this rule. Items in this list are combined using a logical OR operation. If this field is empty or missing, this rule matches all sources (traffic not restricted by source). If this field is present and contains at least on item, this rule allows traffic only if the traffic matches at least one item in the from list.
    */
    'from'?: Array<V1beta1NetworkPolicyPeer>;
    /**
    * List of ports which should be made accessible on the pods selected for this rule. Each item in this list is combined using a logical OR. If this field is empty or missing, this rule matches all ports (traffic not restricted by port). If this field is present and contains at least one item, then this rule allows traffic only if the traffic matches at least one port in the list.
    */
    'ports'?: Array<V1beta1NetworkPolicyPort>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "from",
            "baseName": "from",
            "type": "Array<V1beta1NetworkPolicyPeer>"
        },
        {
            "name": "ports",
            "baseName": "ports",
            "type": "Array<V1beta1NetworkPolicyPort>"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1NetworkPolicyIngressRule.attributeTypeMap;
    }
}

