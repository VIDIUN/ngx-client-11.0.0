/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMatchCondition } from './KalturaMatchCondition';
/**
 * @record
 */
export function KalturaIpAddressConditionArgs() { }
/** @type {?|undefined} */
KalturaIpAddressConditionArgs.prototype.acceptInternalIps;
/** @type {?|undefined} */
KalturaIpAddressConditionArgs.prototype.httpHeader;
export class KalturaIpAddressCondition extends KalturaMatchCondition {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaIpAddressCondition' },
            acceptInternalIps: { type: 'b' },
            httpHeader: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaIpAddressCondition.prototype.acceptInternalIps;
    /** @type {?} */
    KalturaIpAddressCondition.prototype.httpHeader;
}
typesMappingStorage['KalturaIpAddressCondition'] = KalturaIpAddressCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUlwQWRkcmVzc0NvbmRpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUlwQWRkcmVzc0NvbmRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBNkIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7O0FBUTNGLE1BQU0sZ0NBQWlDLFNBQVEscUJBQXFCOzs7O0lBS2hFLFlBQVksSUFBcUM7UUFFN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDJCQUEyQixDQUFDLEdBQUcseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1hdGNoQ29uZGl0aW9uLCBLYWx0dXJhTWF0Y2hDb25kaXRpb25BcmdzIH0gZnJvbSAnLi9LYWx0dXJhTWF0Y2hDb25kaXRpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFJcEFkZHJlc3NDb25kaXRpb25BcmdzICBleHRlbmRzIEthbHR1cmFNYXRjaENvbmRpdGlvbkFyZ3Mge1xuICAgIGFjY2VwdEludGVybmFsSXBzPyA6IGJvb2xlYW47XG5cdGh0dHBIZWFkZXI/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhSXBBZGRyZXNzQ29uZGl0aW9uIGV4dGVuZHMgS2FsdHVyYU1hdGNoQ29uZGl0aW9uIHtcblxuICAgIGFjY2VwdEludGVybmFsSXBzIDogYm9vbGVhbjtcblx0aHR0cEhlYWRlciA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUlwQWRkcmVzc0NvbmRpdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhSXBBZGRyZXNzQ29uZGl0aW9uJyB9LFxuXHRcdFx0XHRhY2NlcHRJbnRlcm5hbElwcyA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRodHRwSGVhZGVyIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFJcEFkZHJlc3NDb25kaXRpb24nXSA9IEthbHR1cmFJcEFkZHJlc3NDb25kaXRpb247Il19