/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventNotificationParameter } from './KalturaEventNotificationParameter';
/**
 * @record
 */
export function KalturaEmailNotificationParameterArgs() { }
export class KalturaEmailNotificationParameter extends KalturaEventNotificationParameter {
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
            objectType: { type: 'c', default: 'KalturaEmailNotificationParameter' }
        });
        return result;
    }
}
typesMappingStorage['KalturaEmailNotificationParameter'] = KalturaEmailNotificationParameter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUGFyYW1ldGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRW1haWxOb3RpZmljYXRpb25QYXJhbWV0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUNBQWlDLEVBQXlDLE1BQU0scUNBQXFDLENBQUM7Ozs7O0FBTy9ILE1BQU0sd0NBQXlDLFNBQVEsaUNBQWlDOzs7O0lBSXBGLFlBQVksSUFBNkM7UUFFckQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1NBQzdFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjtBQUVELG1CQUFtQixDQUFDLG1DQUFtQyxDQUFDLEdBQUcsaUNBQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyLCBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblBhcmFtZXRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblBhcmFtZXRlciBleHRlbmRzIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlciB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUGFyYW1ldGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblBhcmFtZXRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUGFyYW1ldGVyJ10gPSBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25QYXJhbWV0ZXI7Il19